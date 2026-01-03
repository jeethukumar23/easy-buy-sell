-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  category TEXT NOT NULL,
  subcategory TEXT,
  brand TEXT,
  image_url TEXT NOT NULL,
  images TEXT[] DEFAULT ARRAY[]::TEXT[],
  colors TEXT[] DEFAULT ARRAY[]::TEXT[],
  rating DECIMAL(2, 1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  stock INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT true,
  discount INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Products are viewable by everyone
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Create wishlist table
CREATE TABLE public.wishlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;

-- Users can view their own wishlist
CREATE POLICY "Users can view their own wishlist" 
ON public.wishlist 
FOR SELECT 
USING (auth.uid() = user_id);

-- Users can add to their own wishlist
CREATE POLICY "Users can add to their own wishlist" 
ON public.wishlist 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Users can remove from their own wishlist
CREATE POLICY "Users can delete from their own wishlist" 
ON public.wishlist 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create cart table
CREATE TABLE public.cart (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  selected_color TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id, selected_color)
);

-- Enable Row Level Security
ALTER TABLE public.cart ENABLE ROW LEVEL SECURITY;

-- Users can view their own cart
CREATE POLICY "Users can view their own cart" 
ON public.cart 
FOR SELECT 
USING (auth.uid() = user_id);

-- Users can add to their own cart
CREATE POLICY "Users can add to their own cart" 
ON public.cart 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Users can update their own cart
CREATE POLICY "Users can update their own cart" 
ON public.cart 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Users can remove from their own cart
CREATE POLICY "Users can delete from their own cart" 
ON public.cart 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on products
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for automatic timestamp updates on cart
CREATE TRIGGER update_cart_updated_at
BEFORE UPDATE ON public.cart
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample electronics products
INSERT INTO public.products (name, description, price, original_price, category, subcategory, brand, image_url, images, colors, rating, reviews_count, stock, discount) VALUES
('iPhone 15 Pro Max', 'The most advanced iPhone ever with A17 Pro chip, titanium design, and pro camera system', 1199.99, 1299.99, 'Electronics', 'Smartphones', 'Apple', 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&h=600&fit=crop'], ARRAY['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'], 4.9, 3542, 50, 8),
('iPhone 15 Pro', 'Pro camera system and A17 Pro chip in a stunning design', 999.99, 1099.99, 'Electronics', 'Smartphones', 'Apple', 'https://images.unsplash.com/photo-1592286927505-b0c2464d7e3f?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1592286927505-b0c2464d7e3f?w=800&h=600&fit=crop'], ARRAY['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'], 4.8, 2847, 75, 9),
('iPhone 14', 'A15 Bionic chip with advanced dual-camera system', 699.99, 799.99, 'Electronics', 'Smartphones', 'Apple', 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop'], ARRAY['Purple', 'Blue', 'Midnight', 'Starlight', 'Product Red'], 4.7, 5234, 100, 13),
('Samsung Galaxy S24 Ultra', 'Galaxy AI is here. With an embedded S Pen and powerful Snapdragon processor', 1199.99, 1299.99, 'Electronics', 'Smartphones', 'Samsung', 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=600&fit=crop'], ARRAY['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'], 4.8, 1876, 60, 8),
('MacBook Pro 14"', 'M3 Pro chip for exceptional performance and battery life', 1999.99, 2199.99, 'Electronics', 'Laptops', 'Apple', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop'], ARRAY['Space Gray', 'Silver'], 4.9, 1253, 30, 9),
('Dell XPS 15', 'InfinityEdge display with 12th Gen Intel Core processors', 1499.99, 1699.99, 'Electronics', 'Laptops', 'Dell', 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop'], ARRAY['Platinum Silver', 'Frost White'], 4.6, 892, 45, 12),
('Sony WH-1000XM5', 'Industry-leading noise cancellation with exceptional sound quality', 399.99, 449.99, 'Electronics', 'Audio', 'Sony', 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop'], ARRAY['Black', 'Silver'], 4.8, 4521, 120, 11),
('AirPods Pro (2nd Gen)', 'Active Noise Cancellation and Adaptive Transparency', 249.99, 279.99, 'Electronics', 'Audio', 'Apple', 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=600&fit=crop'], ARRAY['White'], 4.7, 3421, 200, 11);

-- Insert fashion products
INSERT INTO public.products (name, description, price, original_price, category, subcategory, brand, image_url, images, colors, rating, reviews_count, stock, discount) VALUES
('Classic Denim Jacket', 'Timeless denim jacket for all seasons', 79.99, 99.99, 'Fashion', 'Outerwear', 'Levis', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500', ARRAY['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'], ARRAY['Light Blue', 'Dark Blue', 'Black'], 4.5, 892, 150, 20),
('Premium Cotton T-Shirt', 'Soft and comfortable everyday essential', 29.99, 39.99, 'Fashion', 'T-Shirts', 'Nike', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', ARRAY['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'], ARRAY['White', 'Black', 'Navy', 'Gray'], 4.6, 1234, 300, 25),
('Slim Fit Jeans', 'Modern fit with stretch comfort', 89.99, 119.99, 'Fashion', 'Pants', 'Levis', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500', ARRAY['https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'], ARRAY['Dark Wash', 'Light Wash', 'Black'], 4.7, 2103, 200, 25),
('Summer Floral Dress', 'Light and breezy dress perfect for summer', 69.99, 89.99, 'Fashion', 'Dresses', 'Zara', 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500', ARRAY['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500'], ARRAY['Floral Blue', 'Floral Pink', 'White'], 4.4, 567, 80, 22);

-- Insert books
INSERT INTO public.products (name, description, price, original_price, category, brand, image_url, rating, reviews_count, stock, discount) VALUES
('The Psychology of Money', 'Timeless lessons on wealth, greed, and happiness by Morgan Housel', 24.99, 29.99, 'Books', 'Harriman House', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', 4.8, 5234, 500, 17),
('Atomic Habits', 'An Easy & Proven Way to Build Good Habits by James Clear', 26.99, 32.99, 'Books', 'Penguin Random House', 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500', 4.9, 8765, 400, 18),
('The Silent Patient', 'A psychological thriller by Alex Michaelides', 19.99, 24.99, 'Books', 'Celadon Books', 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500', 4.5, 3421, 300, 20);

-- Insert beauty products
INSERT INTO public.products (name, description, price, original_price, category, subcategory, brand, image_url, images, colors, rating, reviews_count, stock, discount) VALUES
('Hydrating Face Serum', 'Advanced hyaluronic acid formula for intense hydration', 49.99, 64.99, 'Beauty', 'Skincare', 'The Ordinary', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500', ARRAY['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500'], ARRAY[]::TEXT[], 4.7, 2341, 250, 23),
('Matte Lipstick Set', 'Long-lasting matte finish lipstick collection', 39.99, 49.99, 'Beauty', 'Makeup', 'MAC', 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500', ARRAY['https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500'], ARRAY['Ruby Woo', 'Velvet Teddy', 'Mehr', 'Taupe'], 4.6, 1892, 180, 20),
('Anti-Aging Night Cream', 'Retinol-enriched night cream for youthful skin', 79.99, 99.99, 'Beauty', 'Skincare', 'Olay', 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500', ARRAY['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500'], ARRAY[]::TEXT[], 4.5, 987, 150, 20);

-- Insert home & garden products
INSERT INTO public.products (name, description, price, original_price, category, subcategory, brand, image_url, images, colors, rating, reviews_count, stock, discount) VALUES
('Modern Table Lamp', 'Minimalist LED table lamp with adjustable brightness', 59.99, 79.99, 'Home & Garden', 'Lighting', 'Philips', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop'], ARRAY['White', 'Black', 'Gray'], 4.6, 1543, 200, 25),
('Ceramic Plant Pot Set', 'Set of 3 elegant ceramic planters with drainage', 34.99, 44.99, 'Home & Garden', 'Decor', 'HomeTrends', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop'], ARRAY['White', 'Terracotta', 'Gray'], 4.5, 892, 150, 22),
('Memory Foam Pillow', 'Premium memory foam pillow for better sleep', 49.99, 69.99, 'Home & Garden', 'Bedding', 'Sleep Innovations', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=600&fit=crop'], ARRAY['White'], 4.7, 2156, 180, 29),
('Stainless Steel Cookware Set', '10-piece premium stainless steel cookware with lids', 249.99, 349.99, 'Home & Garden', 'Kitchen', 'Cuisinart', 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop'], ARRAY['Silver'], 4.8, 1678, 100, 29),
('Garden Tool Set', 'Complete 12-piece gardening tool kit with carrying case', 79.99, 99.99, 'Home & Garden', 'Garden Tools', 'Fiskars', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop'], ARRAY['Green'], 4.6, 743, 120, 20),
('Cotton Throw Blanket', 'Soft and cozy cotton throw blanket for all seasons', 39.99, 54.99, 'Home & Garden', 'Textiles', 'Bedsure', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop'], ARRAY['Gray', 'Navy', 'Beige', 'Burgundy'], 4.7, 1892, 250, 27);

-- Insert sports products
INSERT INTO public.products (name, description, price, original_price, category, subcategory, brand, image_url, images, colors, rating, reviews_count, stock, discount) VALUES
('Premium Yoga Mat', 'Non-slip eco-friendly yoga mat with carrying strap', 49.99, 69.99, 'Sports', 'Fitness', 'Manduka', 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop'], ARRAY['Purple', 'Blue', 'Green', 'Black'], 4.8, 2341, 200, 29),
('Adjustable Dumbbells', 'Space-saving adjustable dumbbells 5-52.5 lbs per hand', 299.99, 399.99, 'Sports', 'Strength Training', 'Bowflex', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop'], ARRAY['Black'], 4.7, 1543, 80, 25),
('Running Shoes', 'Lightweight cushioned running shoes for all distances', 129.99, 159.99, 'Sports', 'Footwear', 'Nike', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop'], ARRAY['Black', 'White', 'Blue', 'Red'], 4.6, 3421, 150, 19),
('Tennis Racket', 'Professional grade tennis racket with graphite frame', 179.99, 229.99, 'Sports', 'Racquet Sports', 'Wilson', 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop'], ARRAY['Black/Red'], 4.7, 876, 90, 22),
('Soccer Ball', 'FIFA approved professional soccer ball size 5', 39.99, 49.99, 'Sports', 'Team Sports', 'Adidas', 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800&h=600&fit=crop'], ARRAY['White/Black'], 4.8, 1234, 200, 20),
('Camping Tent', '4-person waterproof camping tent with easy setup', 149.99, 199.99, 'Sports', 'Outdoor', 'Coleman', 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop'], ARRAY['Green', 'Blue'], 4.6, 1092, 70, 25),
('Cycling Helmet', 'Lightweight ventilated cycling helmet with adjustable fit', 69.99, 89.99, 'Sports', 'Cycling', 'Giro', 'https://images.unsplash.com/photo-1614163962417-92d50943878d?w=800&h=600&fit=crop', ARRAY['https://images.unsplash.com/photo-1614163962417-92d50943878d?w=800&h=600&fit=crop'], ARRAY['Black', 'White', 'Red', 'Blue'], 4.7, 892, 140, 22);