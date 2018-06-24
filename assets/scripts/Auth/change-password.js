import apiUrl from "../config.js";
import config from "../store.js";
import modalAlert from "../UIBehavior/modalAlert.js";

let changePassword = () => {
  $("#change-password").on("submit", event => {
    let serialization = $("#change-password").serializeArray();
    event.preventDefault();
    $.ajax({
        url: apiUrl.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
          Authorization: "Token token=" + config.user.token
        },
        data: {
          passwords: {
            old: serialization[0].value,
            new: serialization[1].value
          }
        },
      })
      .then((data) => {
        $('#change-password').trigger('reset');
        modalAlert("Password Changed", "Alert!!")
        $('#closeModal').trigger('click');
        $("#log-out").trigger('click');
      })
      .catch(() => {
        modalAlert("Error changing password", "Alert!!");
        $('#closeModal').trigger('click');
        $('#change-password').trigger('reset');
      });
  });
}

export default changePassword;
