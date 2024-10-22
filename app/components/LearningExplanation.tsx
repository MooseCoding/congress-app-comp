const Explanation = () => {
    return (
      <div className="py-10 px-6">
        <div className="max-w-3xl mx-auto shadow-lg rounded-lg p-6" style={{backgroundColor:'#2b6978'}}>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Federal Agency Response to Severe Storms and Fires
          </h2>
          <p className="text-lg mb-6">
            Federal agencies, such as FEMA, NOAA, and the U.S. Forest Service, play crucial roles in deploying and coordinating response teams during severe storms and massive fires. The process begins with monitoring and forecasting weather patterns through NOAA’s National Weather Service (NWS), which issues warnings and watches for events like tornadoes, floods, hurricanes, and freezes. FEMA works closely with local and state governments to assess the severity of the storm or disaster and the potential impact. Based on these assessments, FEMA activates its regional response coordination centers and deploys teams based on the scale and location of the event.
          </p>
          <p className="text-lg  mb-6"> 
            Team deployment is heavily influenced by the type of disaster. In the case of hurricanes or floods, FEMA coordinates with the U.S. Army Corps of Engineers and local agencies for pre-storm preparation, such as reinforcing levees or deploying sandbags. Urban Search and Rescue (USAR) teams may be pre-positioned in areas expected to be affected, while National Guard units are mobilized for logistical support and evacuation efforts. In the case of wildfires, the U.S. Forest Service oversees the coordination of firefighting teams, including specialized hotshot crews, air support, and smokejumpers, to manage fire containment. The severity of the disaster and the resources of the affected state or locality determine the number of teams and the speed of their deployment.
          </p>
          <p className="text-lg">
            FEMA’s National Incident Management Assistance Teams (IMAT) and other specialized units like the Incident Response Coordination Teams (IRCT) are deployed based on the priority of the event and the specific needs of the affected areas. Factors like the population density, infrastructure at risk, and historical data on the area's vulnerability influence the decision of which teams are sent. Communication and coordination between local, state, and federal agencies ensure that teams arrive equipped with the necessary resources to provide immediate relief and facilitate recovery efforts.
          </p>
        </div>
      </div>
    );
  };
  
  export default Explanation;