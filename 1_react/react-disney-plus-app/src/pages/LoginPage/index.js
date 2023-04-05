// import React from 'react'
// import './LoginPage.css'

// const LoginPage = () => {
//   return (
//     <section className="Container">
//       <div className="Content">
//         <div className="Center">
//           <img className="LogoOne" src="images/cta-logo-one.svg" alt="logo-one" />
          // <a className="SignUpLink">지금 가입</a>
//           <p className="Description">
//             영화에 대한 프리미어 액세스를 얻으십시오.
//             디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
//           </p>
//           <img className="LogoTwo" src="images/cta-logo-two.png" alt="logo-two" />
//         </div>
//         <div className="BgImage" />
//       </div>
//     </section>
//   );
// };

// export default LoginPage

import React from 'react'
import './LoginPage.css'

const LoginPage = ()=>{
  return (
    <section className="Container">
      <div className="Content">
        <div className="Center">
          <img
            className="LogoOne"
            src="images/cta-logo-one.svg"
            alt="Logo-one"
          ></img>
          <a className="SignUpLink">지금 가입</a>
          <p className="Description">
            영화에 대한 프리미어 액세스를 얻으십시오. 디즈니 플러스 가격은 다음
            주부터 1000원 인상됩니다.
          </p>
          <img
            className="LogoTwo"
            src="images/cta-logo-two.png"
            alt="LogoTwo"
          ></img>
        </div>
        <div className="BgImage"></div>
      </div>
    </section>
  );
}

export default LoginPage