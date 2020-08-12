'use strict';

// *** Fashion Show Page JS***



// *** End Fashion SHow Page JS ***

// *** About Us / Contact Page JS ***
const userInfoArray = [{
name: '',
email: '',
comments: ''
}]

const buildModal = () => {
    let domString = '';

    for (let i = 0; i < userInfoArray.length; i++) {
    domString += `<div class="modal fade" id="userSubmitModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Is this information correct?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Name: ${userInfoArray[i].name}</p>
          <p>Email: ${userInfoArray[i].email}</p>
          <p>Comments: ${userInfoArray[i].comments}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="modalConfirm" data-dismiss="modal" data-toggle="modal" data-target="confirmationModal">Confirm</button>
        </div>
      </div>
    </div>
  </div>`
    }
  printModalToDom('modalContainer', domString);
}
 
const confirmSubmit = (e) => {
    let domString = '';

    const target = e.target.id;
    for (let i = 0; i < userInfoArray.length; i++) {
    if (target === `modalConfirm`) {
            domString += `<div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmationModalLabel">Success!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Thank you for your input!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }
        printModalToDom('modalContainer', domString);
    }

const printModalToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

  const submitUserInfo = (e) => {
      const target = e.target.id;

      for (let i = 0; i < userInfoArray.length; i++) {
      if (target === 'formSubmitBtn') {
        const name = document.querySelector('#userName').value;
        const email = document.querySelector('#userEmail').value;
        const comments = document.querySelector('#userComments').value;
        userInfoArray[i].name = name;
        userInfoArray[i].email = email;
        userInfoArray[i].comments = comments;
      }
    }
  }

  const contactButtonEvent = () => {
      for (let i = 0; i < userInfoArray.length; i++) {
    document.querySelector('#formSubmitBtn').addEventListener('click', submitUserInfo);
    document.querySelector('#formSubmitBtn').addEventListener('click', buildModal);
    document.querySelector('#modalContainer').addEventListener('click', confirmSubmit);
      }
  }

  const initRb = () => {
    contactButtonEvent();
  }

  initRb();
// *** End About Us / Contact Page JS ***