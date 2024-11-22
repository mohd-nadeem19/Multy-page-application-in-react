import React from 'react'
import Homeco from '../Components/Homeco'
import PerfectTeam from '../Components/PerfectTeam'
import OurWorkProd from '../Components/OurWorkProd'
import PerfectPartner from '../Components/PerfectPartner'
import TrustUsNow from '../Components/TrustUsNow'
import ClientsFeedback from '../Components/ClientsFeedback'
import Footer from '../Components/footer'

const HomePage = () => {
  return (
    <div>
        <Homeco />
        <PerfectTeam />
        <OurWorkProd />
        <PerfectPartner />
        <TrustUsNow />
        <ClientsFeedback />
        <Footer />
    </div>
  )
}

export default HomePage