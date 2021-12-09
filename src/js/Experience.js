 const jobSection = document.getElementById('jobsExpe__id');
 const experienceList = [
   {
    time: 'April 2021 to Present',
    company: 'NuOp Inc',
    jobtitle: 'FrontEnd Developer'
   },
   {
    time: 'April 2017 to February 2021',
    company: 'The Centria Group',
    jobtitle: 'SEO Specialist'
   },
   {
    time: 'June 2014 to April 2017',
    company: 'I24WEB LLC',
    jobtitle: 'SEO Specialist and Traffic Manager'
   }
 ]

experienceList.forEach(job => {
  jobSection.innerHTML +=  `
        <li>
            <div class="jobItem">
            <div class="jobItem-title">
              <p>${job.time}</p>
            </div>
            <div class="jobItem-content">
              <h4>${job.company}</h4>
              <p>${job.jobtitle}</p>
            </div>
            </div>       
        </li>
  `
})



