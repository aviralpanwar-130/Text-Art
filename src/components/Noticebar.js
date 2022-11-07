import React from 'react'

export default function Noticebar(props) {
      if (props.notice != null) {
            return (<div class={`alert alert-${props.notice.type.toLowerCase() !== "success" ? "warning" : "success"} alert-dismissible fade show`} role="alert">
                  <strong>{props.notice.type}</strong> {props.notice.msg}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            )
      }
      return (<div></div>)
}
