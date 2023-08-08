import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import ConsultForm from './components/ConsultForm';
import SafetyPlan from './components/SafetyPlanForm';
import ContactPage from './components/ContactPage';
import Testimonials from './components/Testimonials'
import SafetyPlanForm from './components/SafetyPlanForm';
import IdAbuse from './components/IdAbuse';
import NewsletterSignup from './components/Newsletter';
import Consultation from './components/Consultations';
import AgencyMaps from './components/AgencyMapping';

import './App.css';

function App() {
  const [completedSafetyPlan, setCompletedSafetyPlan] = useState([]);
  const [newConsultation, setNewConsultation] = useState([])

  useEffect(()=>{
    fetch ('/consultations')
    .then (response => response.json())
    .then (newConsultation =>setNewConsultation(newConsultation))
  }, [])

  const handleSubmit = (formData) => {
    fetch('/generate_safety_plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),

    })
      .then((response) => response.json())
      .then((data) => {
        setCompletedSafetyPlan(data);
      })
  }

  // const location = useLocation();
  // const isSafetyPlanPage = location.pathname ==='/safety-plan';

  return (

  
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/safety_plan" element={<SafetyPlan />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/id_abuse" element={<IdAbuse/>}/>
          <Route path="/consultations" element={<Consultation newConsultation={newConsultation}/>}/>
          <Route path="/resources" element={<AgencyMaps/>}/>
        </Routes>

{/* Force system to populate information on their own pages */}
        <Routes>
        <Route path='/contact'
          render={()=> <ConsultForm onSubmit={handleSubmit}/>}
          />
        <Route  
        path="/safety_plan"
          render={() => <SafetyPlanForm onSubmit={handleSubmit} />}
        />
    

        </Routes>
        <NewsletterSignup />
      </div>
  
  );
}

      export default App;
