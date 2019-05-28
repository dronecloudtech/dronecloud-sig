import React from 'react'
import {MDBBtn} from 'mdbreact'
import PropTypes from 'prop-types'
import '../css/button.css'

export default function Button(props) {
    return (
      <section className="_sec-btn">
        {props.name.flatMap((i, k) => (
          <MDBBtn outline className="_btn-action font-weight-bold" key={k} color="amber">
            {i}
          </MDBBtn>
        ))}
      </section>
    );
}

Button.propTypes = {
    name: PropTypes.array.isRequired
}