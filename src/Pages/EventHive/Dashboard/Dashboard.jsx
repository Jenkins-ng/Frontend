import React from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { dailyTraffic, piechart, stackedColumn } from '../../../utils/data'

const Dashboard = () => {
  return (
    <>
      <section className="grid grid-cols-4 gap-8 event-hive">
        <div className="bg-white rounded-lg h-52 "></div>
        <div className="bg-white rounded-lg h-52 "></div>
        <div className="bg-white rounded-lg h-52 "></div>
        <div className="bg-white rounded-lg h-52 "></div>
      </section>
      {/* charts */}
      <div className="grid gap-x-5 gap-y-10 pt-10 pb-4">
        {/* weekly revenue */}
        <section className="bg-white rounded-[20px] p-8 col-span-2">
          <div className="flex justify-between items-center">
            <h3>Weekly Revenue</h3>
            <span className="py-2 px-4 bg-[#f4f7fe] rounded-lg">
              <img src="/src/assets/images/bar_chart.svg" alt="" />
            </span>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={stackedColumn} className="mt-10">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="x" stackId="stack" fill="#84d9fd" barSize={20} />
                <Bar dataKey="y" stackId="stack" fill="#775ffc" barSize={20} />
                <Bar
                  dataKey="z"
                  stackId="stack"
                  fill="#f0f3f9"
                  barSize={20}
                  radius={[20, 20, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
        {/* pie chart */}
        <section className="bg-white rounded-[20px] p-8 col-span-1">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Your Pie Chart</h4>
            <select name="" id="" className="text-[#687C94]">
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <PieChart width={300} height={300}>
              <Tooltip />
              <Pie
                data={piechart}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {piechart.map(({ color }, i) => (
                  <Cell key={i} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="py-4 px-10 bg-white shadow-2xl rounded-2xl flex justify-between items-center">
            {piechart.map(({ name, color, value }, i) => {
              return (
                <div key={i}>
                  <span
                    style={{ background: color }}
                    className="inline-block w-3 h-3 rounded-full"
                  ></span>{' '}
                  <span className="font-medium text-[#687C94]">{name}</span>
                  <h3 className="text-lg ml-4">{value}%</h3>
                </div>
              )
            })}
          </div>
        </section>
        {/* daily traffic */}
        <section className="bg-white rounded-[20px] p-8 col-span-1">
          <div className="flex justify-between items-center">
            <h4 className="text-[#A3AED0] font-medium">Daily Traffic</h4>
            <span className="text-[#05CD99] font-bold">+2.45%</span>
          </div>
          <h2 className="text-[#2B3674]">
            2.579{' '}
            <span className="text-base text-[#A3AED0] font-normal">
              Visitors
            </span>
          </h2>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart
                data={dailyTraffic}
                className="mt-20"
                barCategoryGap={20}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#775ffc"
                  barSize={20}
                  radius={[20, 20, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
