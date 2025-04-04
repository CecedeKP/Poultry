
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/components/ui/use-toast';

const Cart = () => {
  const { items, removeItem, updateQuantity, removeAll } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shippingFee = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shippingFee;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. Your order is being processed.",
      });
      removeAll();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      
      <div className="bg-poultry-brown/10 py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-poultry-brown text-center">Your Cart</h1>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container-custom">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <ShoppingBag className="h-20 w-20 text-gray-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild className="bg-poultry-brown hover:bg-poultry-brown/90 text-white">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subtotal
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="h-8 w-8 rounded-l-md border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (!isNaN(value)) {
                                      handleQuantityChange(item.id, value);
                                    }
                                  }}
                                  className="h-8 w-12 border-t border-b border-gray-300 bg-white text-center text-gray-700 text-sm outline-none"
                                />
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="h-8 w-8 rounded-r-md border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button asChild variant="outline" className="border-poultry-brown text-poultry-brown hover:bg-poultry-brown/10">
                    <Link to="/shop">
                      Continue Shopping
                    </Link>
                  </Button>
                  <Button 
                    onClick={removeAll} 
                    variant="outline" 
                    className="border-red-500 text-red-500 hover:bg-red-500/10"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-poultry-brown mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-800 font-semibold">Total</span>
                        <span className="font-bold text-poultry-brown">${total.toFixed(2)}</span>
                      </div>
                      {subtotal < 50 && (
                        <p className="text-sm text-gray-500 mt-2">
                          Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping.
                        </p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="w-full bg-poultry-brown hover:bg-poultry-brown/90 text-white"
                      >
                        {isCheckingOut ? 'Processing...' : 'Checkout'} 
                        {!isCheckingOut && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <h3 className="text-sm font-medium text-gray-700">We Accept:</h3>
                      <div className="flex gap-2">
                        <div className="h-8 w-12 bg-gray-200 rounded"></div>
                        <div className="h-8 w-12 bg-gray-200 rounded"></div>
                        <div className="h-8 w-12 bg-gray-200 rounded"></div>
                        <div className="h-8 w-12 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cart;
