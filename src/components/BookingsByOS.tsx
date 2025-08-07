import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Monitor } from 'lucide-react';

interface OSData {
  name: string;
  value: number;
  color: string;
}

const BookingsByOS: React.FC = () => {
  const [data, setData] = useState<OSData[]>([]);
  const [totalBookings, setTotalBookings] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOSData = async () => {
      try {
        // Mock data for OS bookings - replace with actual API call
        const mockData = [
          { name: 'WINDOWS', value: 3200, color: '#0078D4' },
          { name: 'MACOS', value: 2100, color: '#000000' },
          { name: 'LINUX', value: 800, color: '#FCC624' },
          { name: 'ANDROID', value: 900, color: '#3DDC84' },
          { name: 'IOS', value: 443, color: '#007AFF' },
        ];
        
        const total = mockData.reduce((sum, item) => sum + item.value, 0);
        setData(mockData);
        setTotalBookings(total);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching OS data:', error);
        setLoading(false);
      }
    };

    fetchOSData();
  }, []);

  const renderCustomizedLabel = ({ cx, cy }: any) => {
    return (
      <text 
        x={cx} 
        y={cy - 10} 
        fill="#1f2937" 
        textAnchor="middle" 
        dominantBaseline="central"
        className="text-2xl font-bold"
      >
        {totalBookings.toLocaleString()}
      </text>
    );
  };

  const renderSubLabel = ({ cx, cy }: any) => {
    return (
      <text 
        x={cx} 
        y={cy + 15} 
        fill="#6b7280" 
        textAnchor="middle" 
        dominantBaseline="central"
        className="text-sm"
      >
        Total Bookings
      </text>
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Monitor className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Bookings by OS</h3>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <Monitor className="w-5 h-5 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Bookings by OS</h3>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={0}
              endAngle={360}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="central"
              dy={15}
              className="text-sm fill-gray-500"
            >
              Total Bookings
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsByOS;