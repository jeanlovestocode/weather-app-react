import React from "react";

export default function Header() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn search-bar-color w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}
// return (
//  <div className="container">
//     <div className="row">
//       <div className="col-6">
//         <form id="city-form">
//           <input
//             type="search"
//             placeholder="Search for a city"
//             className="form-control"
//             id="city-input"
//             autocomplete="off"
//           />
//           <div className="col-6">
//             <input type="submit" value="Search" class="btn" />
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// );
