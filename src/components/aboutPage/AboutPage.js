import React from 'react'
import "./AboutPageStyle.css"

function About() {
  return (
    <div style={{marginTop: '100px'}}>
        <h3 class="text-center mt-4"><b>Computer Science Engineering</b></h3>
        <p class="mt-4" style={{textAlign: 'center'}}>Program your future today.. script the world of tommorrow! Computer Science and Engineering Discipline encourages all around development through indusrty adapted curriculum focusing on enhancing both technical skills and soft skills</p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div class="wrap animate pop">
          <div class="overlay">
            <div class="overlay-content animate slide-left delay-2">
              <h1 class="animate slide-left pop delay-4">Mission</h1>
              <p class="animate slide-left pop delay-5" style={{color: 'white', marginBottom: '2.5rem'}}>CSE Departmnet</p>
            </div>
            <div class="image-content animate slide delay-5"></div>
              <div class="dots animate">
                <div class="dot animate slide-up delay-6"></div>
                <div class="dot animate slide-up delay-7"></div>
                <div class="dot animate slide-up delay-8"></div>
              </div>
          </div>
          <div class="text">
            <p style={{marginTop: '70px', textAlign: 'justify'}}> To impart state-of-the-art knowledge in Computer Science and Engineering, Information Technology and Computer Applications. To ensure our students graduate with a sound theoretical basis and wide-ranging practical experience. To foster linkages between the Department and public and private sectors, traversingresearch establishments as well as Information Technology industry.
            </p>
          </div>
        </div>

        <div class="wrap animate pop">
          <div class="overlay">
            <div class="overlay-content animate slide-left delay-2">
              <h1 class="animate slide-left pop delay-4">Vision</h1>
              <p class="animate slide-left pop delay-5" style={{color: 'white', marginBottom: '2.5rem'}}>CSE Departmnet</p>
            </div>
            <div class="image-content animate slide delay-5"></div>
              <div class="dots animate">
                <div class="dot animate slide-up delay-6"></div>
                <div class="dot animate slide-up delay-7"></div>
                <div class="dot animate slide-up delay-8"></div>
              </div>
          </div>
          <div class="text">
            <p style={{marginTop: '70px', textAlign: 'justify'}}>The vision of the Department is to become a centre of excellence for education in Computer Science, Engineering and Applications. We visualize ourselves as an agency to nurture young minds into leaders of tomorrow in the field of higher education, research and development, and corporate world. We aim to produce creators and innovators who will work towards the overall well being of the society</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


// <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
//         <Card style={{ width: '25rem'}}>
//           <Card.Img variant="top" src={mission} />
//             <Card.Body>
//               <Card.Title>Mission</Card.Title>
//               <Card.Text>
//                 To build computational skills through hands on and practice based learning
//                 with measurable outcomes.
//               </Card.Text>
//               {/* <Button variant="primary">Mission</Button> */}
//             </Card.Body>
//         </Card>
//         <Card style={{ width: '25rem' }}>
//           <Card.Img variant="top" src={vision} />
//             <Card.Body>
//               <Card.Title>Vision</Card.Title>
//               <Card.Text>
//                 To be a globally recognized school through excellence in teaching and learning
//                 for creating Computer Science leaders.
//               </Card.Text>
//               {/* <Button variant="primary">Vision</Button> */}
//             </Card.Body>
//         </Card>
//       </div>