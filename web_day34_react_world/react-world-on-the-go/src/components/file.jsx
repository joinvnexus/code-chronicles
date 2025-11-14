'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Book, Users, Wallet, ChefHat, AlertCircle, CheckCircle, Lightbulb, Code, Play, RotateCcw } from 'lucide-react';
//
// interface Lesson {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   component: React.ReactNode;
// }

export default function ReactLearningDashboard() {
  const [activeLesson, setActiveLesson] = useState (null);
  const [sharedMoney, setSharedMoney] = useState(150);
  const [orderList, setOrderList] = useState([]);
  const [wrongBooks, setWrongBooks] = useState(['React']);
  const [rightBooks, setRightBooks] = useState(['React']);
  const [effectLog, setEffectLog] = useState([]);

  // useEffect Demo
  useEffect(() => { // eslint-disable-line react-hooks/exhaustive-deps
    if (rightBooks.length > 1) {
      setEffectLog(prev => [...prev, `useEffect চললো! বই: ${rightBooks.join(', ')}`]);
    }
  }, [rightBooks]);

  const lessons = [
    {
      id: 'lifting-state',
      title: 'Lifting State Up - মায়ের পার্স',
      icon: <Wallet className="w-5 h-5" />,
      component: ( 
        <div className="space-y-4">
          <p className="text-gray-700">দুই ভাই একই পার্স থেকে টাকা খরচ করে। কিন্তু পার্সটা <strong>মায়ের কাছে</strong>!</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-bold text-blue-800">পার্সে আছে: ৳{sharedMoney}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <p className="font-semibold">রহিম</p>
              <button 
                onClick={() => setSharedMoney(prev => Math.max(0, prev - 50))}
                className="mt-2 bg-purple-600 text-white px-3 py-1 rounded text-sm"
              >
                ৫০ টাকা খরচ
              </button>
            </div>
            <div className="bg-pink-100 p-3 rounded-lg">
              <p className="font-semibold">করিম</p>
              <button 
                onClick={() => setSharedMoney(prev => Math.max(0, prev - 30))}
                className="mt-2 bg-pink-600 text-white px-3 py-1 rounded text-sm"
              >
                ৩০ টাকা খরচ
              </button>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm">
            <p><strong>শিক্ষা:</strong> State Parent-এ রাখলে সবাই একই ডাটা দেখে!</p>
          </div>
        </div>
      )
    },
    {
      id: 'array-state',
      title: 'Array State - বইয়ের তাক',
      icon: <Book className="w-5 h-5" />,
      component: ( 
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-red-300 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <AlertCircle className="w-4 h-4" />
                <p className="font-bold text-sm">ভুল উপায়</p>
              </div>
              <p className="text-xs mb-2">wrongBooks.push() → set(wrongBooks)</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {wrongBooks.map((b, i) => (
                  <span key={i} className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">{b}</span>
                ))}
              </div>
              <button 
                onClick={() => {
                  wrongBooks.push('JS');
                  setWrongBooks(wrongBooks);
                }}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded"
              >
                যোগ করো
              </button>
              <p className="text-xs text-red-600 mt-1">Re-render হবে না!</p>
            </div>

            <div className="border-2 border-green-300 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <CheckCircle className="w-4 h-4" />
                <p className="font-bold text-sm">সঠিক উপায়</p>
              </div>
              <p className="text-xs mb-2">set([...books, 'JS'])</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {rightBooks.map((b, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">{b}</span>
                ))}
              </div>
              <button 
                onClick={() => setRightBooks([...rightBooks, 'JS'])}
                className="text-xs bg-green-500 text-white px-2 py-1 rounded"
              >
                যোগ করো
              </button>
              <p className="text-xs text-green-600 mt-1">Re-render হবে!</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-sm">
            <p><strong>নিয়ম:</strong> অ্যারে বদলালে <code className="bg-yellow-200 px-1">নতুন অ্যারে</code> দাও!</p>
          </div>
        </div>
      )
    },
    {
      id: 'restaurant',
      title: 'Props & Callback - রেস্টুরেন্ট',
      icon: <ChefHat className="w-5 h-5" />,
      component: ( 
        <div className="space-y-4">
          <p className="text-gray-700">ওয়েটার অর্ডার নেয়, শেফ রান্না করে — কিন্তু <strong>অর্ডার লিস্ট ম্যানেজারের কাছে</strong>!</p>

          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-bold text-orange-800">অর্ডার লিস্ট:</p>
            <p>{orderList.length === 0 ? 'কোনো অর্ডার নেই' : orderList.join(', ')}</p>
          </div> {/* Removed extra closing div tag */}

          <div className="grid grid-cols-3 gap-2">
            {['বিরিয়ানি', 'কোল্ড ড্রিঙ্ক', 'সালাদ'].map(item => (
              <button
                key={item}
                onClick={() => setOrderList([...orderList, item])}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-2 rounded transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setOrderList([])}
            className="text-xs bg-gray-500 text-white px-3 py-1 rounded"
          >
            <RotateCcw className="w-3 h-3 inline mr-1" /> ক্লিয়ার
          </button>
        </div>
      )
    },
    {
      id: 'useeffect',
      title: 'useEffect - বই যোগ হলে লগ',
      icon: <Lightbulb className="w-5 h-5" />,
      component: ( 
        <div className="space-y-4">
          <p className="text-gray-700">যখন <strong>সঠিক উপায়ে</strong> বই যোগ করবেন, তখন <code>useEffect</code> চলবে!</p>

          <button 
            onClick={() => setRightBooks([...rightBooks, 'New Book'])}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Play className="w-4 h-4" /> বই যোগ করো
          </button>

          <div className="bg-gray-100 p-3 rounded-lg max-h-32 overflow-y-auto text-xs font-mono">
            {effectLog.length === 0 ? (
              <p className="text-gray-500">এখনো কিছু হয়নি...</p>
            ) : (
              effectLog.map((log, i) => (
                <p key={i} className="text-green-700">→ {log}</p>
              ))
            )}
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              React শিখি মজায়!
            </h1>
            <p className="text-gray-600">গল্প + কোড + ডেমো = সহজে বোঝা</p>
          </div>

          {/* Lesson Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {lessons.map(lesson => (
              <div
                key={lesson.id}
                onClick={() => setActiveLesson(activeLesson === lesson.id ? null : lesson.id)}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-indigo-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                      {lesson.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{lesson.title}</h3>
                  </div>
                  {activeLesson === lesson.id ? 
                    <ChevronUp className="w-5 h-5 text-indigo-600" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>

                  {activeLesson === lesson.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top-2">
                      {lesson.component}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-md">
            <p className="text-gray-600">
              তৈরি করেছেন: <strong className="text-indigo-600">Grok</strong> | 
              {' '} সময়: {new Date().toLocaleString('bn-BD', { 
                year: 'numeric', month: 'long', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dhaka' 
              })}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              কোড + গল্প = মজা + বোঝা!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}