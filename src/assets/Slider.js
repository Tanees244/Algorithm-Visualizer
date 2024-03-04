import React, { useState } from "react";
import "./slider.css";

const Slider = ({ onChange, disabled }) => {
  return (

    <div onChange={onChange}>
          <div className="title">Select Speed</div>
     			<div class="hidden-toggles">
				
				<input name="coloration-level" type="radio" id="slow" value={500} class="hidden-toggles__input" disabled={disabled}/>
				<label for="slow" class="hidden-toggles__label">Low</label>
				
				<input name="coloration-level" type="radio" id="medium" value={200} class="hidden-toggles__input" disabled={disabled}/>
				<label for="medium" class="hidden-toggles__label">Medium</label>	
				
				<input name="coloration-level" type="radio" id="high" value={80} class="hidden-toggles__input" disabled={disabled}/>
				<label for="high" class="hidden-toggles__label">High</label>
				
				<input name="coloration-level" type="radio" id="coloration-striking" value={5} class="hidden-toggles__input" disabled={disabled}/>
				<label for="coloration-striking" class="hidden-toggles__label">Striking</label>
				
			</div>
    </div>
  );
};

export default Slider;
