const steps = [
    {
    number: '01', title: 'Initial Consultation', description: 'We begin by understanding your business need and objectives.'
},
{
    number: '02', title: 'Requirement Analysis', description: 'We analyze your requirements to plan the best approach.'
},
{
    number: '03', title: 'Design and Proposal', description: 'We create a design and proposal tailored to your nedds.' 
},
{
    number: '04', title: 'Development', description: 'Our team develops the solution using the latest technologies.'
},
{
    number: '05', title: 'Testing', description: 'We rigorously test to ensure quality and reliability.'
},
{
    number: '06', title: 'Deployment', description: 'We deploy the solution and ensure everything runs smoothly.'
},
{
    number: '07', title: 'Support and Maintenance', description: 'We provide ongoing support and updates as needed.'
}];
const stepscontainer = document.createElement("div");
stepscontainer.classList.add("steps-container");

steps.forEach((step, index) => {
    const stepDiv = document.createElement("div");
    stepDiv.classList.add("step", `step-${index + 1}`);
    stepDiv.innerHTML = `<h3> ${step.number}</h3> <h3> ${step.title}</h3> <p>${step.description}</p>`;
    stepscontainer.appendChild(stepDiv);
});

document.querySelector(".container").appendChild(stepscontainer);