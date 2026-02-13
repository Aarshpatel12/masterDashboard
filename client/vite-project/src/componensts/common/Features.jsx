import React from 'react'
// import messagingReport from "../../../images/messagingReport.png";
// import adminDashboardLayout from "../../../images/adminDashboardLayout.png";
// import RemainderSystem from "../../../images/RemainderSystem.png";
// import weelyTeachingPlanLayout from "../../../images/weelyTeachingPlanLayout.png";


function Features() {
  const features = [
    {
      img:weelyTeachingPlanLayout,
      title:"Weekly Teaching Plans",
      desc:"Teacher upload detailed weekly plans."
    },
    {
      img:adminDashboardLayout,
      title:"Admin Dashboard",
      desc:"Admins track all submissions easily."
    },
    {
      img:messagingReport,
      title:"Reminder System",
      desc:"Automatic reminders for pending work."
    },
    {
      img:RemainderSystem,
      title:"Reminder System",
      desc:"Admin-teacher communication & reprots."
    }
  ]
  return (
    <section className="px-10 py-16">
      <h2 className='text-3xl font-bold text-center mb-10'>
        Powerful Features
      </h2>
      <div className='grid md:grid-cols-4 gap-6'>
        {features.map((item,index)=>(
          <div
           key={index}
           className='bg-white p-6 rounded shadow hover:shadow-lg'
          >
             <img
        src={item.img}
        alt={item.title}
        className="w-40 h-40 mx-auto mb-4"
      />

            <h3 className='font-semibold mb-2'>{item.title}</h3>
            <p className='text-gray-600 text-sm'>{item.title}</p>
          </div>
        ))}

      </div>
     
    </section>
  )
}

export default Features;
