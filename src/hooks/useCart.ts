import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  selected_color: string | null;
  product: {
    id: string;
    name: string;
    price: number;
    original_price: number | null;
    image_url: string;
    in_stock: boolean;
    stock: number;
  };
}

export const useCart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    if (!user) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cart')
        .select(`
          id,
          product_id,
          quantity,
          selected_color,
          product:products (
            id,
            name,
            price,
            original_price,
            image_url,
            in_stock,
            stock
          )
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      setCartItems(data as unknown as CartItem[]);
    } catch (error) {
      console.error('Error fetching cart:', error);
      toast.error('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const addToCart = async (productId: string, quantity: number = 1, color: string | null = null) => {
    if (!user) {
      toast.error('Please login to add items to cart');
      return;
    }

    try {
      // Check if item already exists in cart
      const { data: existing } = await supabase
        .from('cart')
        .select('id, quantity')
        .eq('user_id', user.id)
        .eq('product_id', productId)
        .single();

      if (existing) {
        // Update quantity
        const { error } = await supabase
          .from('cart')
          .update({ quantity: existing.quantity + quantity })
          .eq('id', existing.id);

        if (error) throw error;
      } else {
        // Insert new item
        const { error } = await supabase
          .from('cart')
          .insert({
            user_id: user.id,
            product_id: productId,
            quantity,
            selected_color: color
          });

        if (error) throw error;
      }

      await fetchCart();
      toast.success('Added to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add to cart');
    }
  };

  const updateQuantity = async (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      await removeFromCart(cartItemId);
      return;
    }

    try {
      const { error } = await supabase
        .from('cart')
        .update({ quantity: newQuantity })
        .eq('id', cartItemId);

      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', cartItemId);

      if (error) throw error;
      await fetchCart();
      toast.success('Removed from cart');
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Failed to remove from cart');
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    loading,
    cartCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    refreshCart: fetchCart
  };
};
