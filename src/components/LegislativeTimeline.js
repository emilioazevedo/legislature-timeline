import React from 'react';
import { Check } from 'lucide-react';

const LegislativeTimeline = ({ stages }) => {
  return (
    <div className="container py-4 d-flex justify-content-end">
      <div className="position-relative" style={{ width: '70%' }}>
        {/* Timeline line */}
        <div 
          className="position-absolute" 
          style={{
            top: '16px',
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#cfe2ff'  // Bootstrap's blue-100 equivalent
          }}
        />
        
        {/* Timeline items */}
        <div className="d-flex justify-content-between position-relative">
          {stages.map((stage, index) => (
            <div key={index} className="d-flex flex-column align-items-center">
              {/* Circle with check */}
              <div 
                className={`rounded-circle d-flex align-items-center justify-content-center mb-2 
                  ${stage.completed ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                style={{ width: '26px', height: '26px', zIndex: 1 }}
              >
                {stage.completed && (
                  <Check className="text-white" style={{ width: '20px', height: '20px' }} />
                )}
              </div>
              
              {/* Label */}
              <div className="text-center small fw-medium" style={{ maxWidth: '120px' }}>
                {stage.label}
              </div>
              
              {/* Date */}
              <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                {stage.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage:
const ExampleTimeline = () => {
  const legislativeStages = [
    {
      label: "Filed",
      date: "03/01/2023",
      completed: true
    },
    {
      label: "Out of House Committee",
      date: "04/12/2023",
      completed: true
    },
    {
      label: "Voted on by House",
      date: "04/24/2023",
      completed: true
    },
    {
      label: "Out of Senate Committee",
      date: "05/23/2023",
      completed: false
    },
    {
      label: "Voted on by Senate",
      date: "06/02/2023",
      completed: false
    },
    {
      label: "Governor Action",
      date: "06/02/2024",
      completed: false
    },
    {
      label: "Bill Becomes Law",
      date: "",
      completed: false
    }
  ];

  return <LegislativeTimeline stages={legislativeStages} />;
};

export default ExampleTimeline;