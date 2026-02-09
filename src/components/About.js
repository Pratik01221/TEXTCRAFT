import React from 'react'

export default function About() {

  // const [myStyle, setmyStyle] = useState({

  //   Color: 'white',
  //   backgroundColor: 'black'

  // });


  // const [btntext,setbtnText]= useState ('Enable Dark Mode')


  // const toggleStyle =()=>{
  //   if (myStyle.Color==='white'){
  //     setmyStyle({
  //       Color:'black',
  //       backgroundColor:'white'
  //     })
  //     setbtnText('Enable Dark Mode')
  //   }
  //   else{
  //     setmyStyle({
  //        Color:'white',
  //       backgroundColor:'black'
  //     })
  //        setbtnText('Enable Light Mode')
  //   }
  // }

  // let myStyle = {
  //   color: 'white',
  //   backgroundColor: 'black'
  // }



  return (
    <div className='container '    >
      <h1 className='my-3'>About Us</h1>
      <div className="accordion my-5" id="accordionExample">
        <div className="accordion-item"    >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Features-focused (Best for TextCraft)
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This section highlights the core features of TextCraft.
                TextCraft helps you transform your text effortlessly with tools like case conversion, extra space removal, word counting, and character analysis. It’s designed to be fast, user-friendly, and accessible on all devices, making everyday text editing simple and efficient.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item"   >
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              User-friendly & simple
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Because it saves time and keeps things simple. Whether you’re a student, developer, or content creator, TextCraft provides quick text utilities without unnecessary complexity. Clean UI, instant results, and smooth performance — all in one place.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item"   >
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Short & classy (minimal look)
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextCraft is built for speed and simplicity.
                No distractions, no confusion — just powerful text tools that get the job done in seconds.</strong>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
