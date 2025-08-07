@@ .. @@
 import BookingsByBrowser from '../components/BookingsByBrowser';
+import BookingsByOS from '../components/BookingsByOS';
 import DailyBookingsTrend from '../components/DailyBookingsTrend';
@@ .. @@
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
         <BookingsByBrowser />
+        <BookingsByOS />
+      </div>
+      
+      <div className="grid grid-cols-1 gap-6">
         <DailyBookingsTrend />
       </div>
     </div>
@@ .. @@