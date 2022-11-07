import React from 'react'

export default function About(props) {
      return (
            <div>
                  <div className='container mt-5 text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>
                              <strong>About:</strong>
                        </h2>
                        <p >
                              Hey!! Here is all that you want. Here, you can perform various
                              operations on a text such as removing extra space, converting to uppercase,
                              to lowercase, searching a word in the text and much more. Feel free to ask 
                              any query and provide your valuable feedback.
                              

                        </p>
                        
                        
                          <br></br>
                          <br></br>
                        <h4>Thank You!!</h4>
                        <br></br>
                        <br></br>
                        <h5>
                              <strong> Developed By: </strong> Aviral Panwar
                              <br></br>
                              
                              <strong>E-mail:</strong> aviralpanwar263@gmail.com
                        </h5>
                  </div>
            </div>
      )
}
