import React from 'react'

function MessageOthers() {
    var props1 = {name: "RandomUser", message: "This is a sample message"} 
  return (
    <div className='other-message-container'>
        <div className='conversation-container'>
            <p className='con-icon'>{props1.name[0]}</p>
        </div>
        <div className='other-text-content'>
            <p className='con-title'>{props1.name}</p>
            <p className='con-lastMessage'>{props1.lastMessage}</p>
            <p className='con-timeStamp'>12:00pm</p>
        </div>
    </div>
  )
}

export default MessageOthers