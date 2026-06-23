import React, { useState } from 'react';
import { 
  Activity, Users, Calendar, DollarSign, 
  Search, Bell, Menu, Shield, LogOut,
  TrendingUp, Clock, CheckCircle, AlertCircle
} from 'lucide-react';

export default function HospitalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const kpis = [
    { title: "Total Patients", value: "3,842", change: "+12% vs last month", icon: Users, color: "bg-blue-500" },
    { title: "Active Appointments", value: "142", change: "28 remaining today", icon: Calendar, color: "bg-green-500" },
    { title: "ICU Bed Occupancy", value: "84%", change: "16 beds available", icon: Activity, color: "bg-amber-500" },
    { title: "Monthly Revenue", value: "$48,250", change: "+8% vs target", icon: DollarSign, color: "bg-purple-500" }
  ];

  const appointments = [
    { id: 1, patient: "Eleanor Pena", doctor: "Dr. Robert Fox", time: "09:30 AM", dept: "Cardiology", status: "Confirmed" },
    { id: 2, patient: "Guy Hawkins", doctor: "Dr. Jenny Wilson", time: "10:15 AM", dept: "Pediatrics", status: "In Progress" },
    { id: 3, patient: "Albert Flores", doctor: "Dr. Albert Flores", time: "11:00 AM", dept: "Neurology", status: "Waiting" },
    { id: 4, patient: "Savannah Nguyen", doctor: "Dr. Cody Fisher", time: "11:45 AM", dept: "Dermatology", status: "Cancelled" }
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 antialiased w-full overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-slate-200 transition-all duration-300 ease-in-out flex flex-col z-20`}>
        <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
          <Activity className="h-8 w-8 text-blue-500 flex-shrink-0" />
          {sidebarOpen && <span className="font-bold text-lg tracking-wider text-white">MEDICORE</span>}
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1">
          {[
            { name: 'Overview', icon: Activity, active: true },
            { name: 'Appointments', icon: Calendar },
            { name: 'Patient Records', icon: Users },
            { name: 'Billing & Invoices', icon: DollarSign },
            { name: 'System Security', icon: Shield }
          ].map((item) => (
            <button key={item.name} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:bg-rose-950/40 hover:text-rose-400 transition-all font-medium text-sm">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP NAVBAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 flex-shrink-0">
          <div className="flex items-center gap-4 w-96">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input type="text" placeholder="Search patients, doctors, records..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-rose-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <img src="https://unsplash.com" alt="Admin" className="h-9 w-9 rounded-xl object-cover ring-2 ring-slate-100" />
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-slate-800 leading-tight">Dr. Alex House</p>
                <p className="text-xs font-medium text-slate-400">Chief Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* WORKSPACE FRAME */}
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hospital Overview</h1>
            <p className="text-slate-500 text-sm mt-1">Real-time status updates and operational clinical insights.</p>
          </div>

          {/* KPI CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start justify-between">
                <div className="space-y-3">
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{kpi.title}</span>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">{kpi.value}</p>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md w-max">
                    <TrendingUp className="h-3 w-3" /> {kpi.change}
                  </span>
                </div>
                <div className={`${kpi.color} p-3 rounded-xl text-white shadow-lg shadow-blue-500/10`}>
                  <kpi.icon className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>

          {/* ANALYTICS SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* APPOINTMENT QUEUE */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm xl:col-span-2 flex flex-col overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-900 text-base">Live Appointments Queue</h2>
                <button className="text-xs font-bold text-blue-600 hover:underline">View Schedule</button>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <th className="py-4 px-6">Patient</th>
                      <th className="py-4 px-6">Assigned Doctor</th>
                      <th className="py-4 px-6">Time / Dept</th>
                      <th className="py-4 px-6 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                    {appointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-slate-900">{apt.patient}</td>
                        <td className="py-4 px-6 text-slate-500">{apt.doctor}</td>
                        <td className="py-4 px-6">
                          <div>{apt.time}</div>
                          <div className="text-xs text-slate-400 font-normal">{apt.dept}</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`mx-auto flex items-center justify-center gap-1.5 w-28 py-1 rounded-full text-xs font-bold ${
                            apt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' :
                            apt.status === 'In Progress' ? 'bg-blue-50 text-blue-700' :
                            apt.status === 'Waiting' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {apt.status === 'Confirmed' && <CheckCircle className="h-3.5 w-3.5" />}
                            {apt.status === 'In Progress' && <Clock className="h-3.5 w-3.5" />}
                            {apt.status === 'Waiting' && <AlertCircle className="h-3.5 w-3.5" />}
                            {apt.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CAPACITY PANELS */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-6">
              <h2 className="font-bold text-slate-900 text-base">Staffing & Capacity Status</h2>
              <div className="space-y-4">
                {[
                  { name: 'Emergency Room', load: 92, status: 'Critical', color: 'bg-rose-500' },
                  { name: 'Intensive Care (ICU)', load: 84, status: 'High', color: 'bg-amber-500' },
                  { name: 'General Ward', load: 61, status: 'Stable', color: 'bg-emerald-500' },
