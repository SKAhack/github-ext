function saveOptions() {
  var setting = document.getElementById('setting').value;
  var status = document.getElementById('status');
  var json;

  try {
    json = JSON.parse(setting);
  } catch(e) {
    json = undefined;
  }

  if (!json) {
    status.textContent = 'Error: Invalid Option.';
    setTimeout(function(){
      status.textContent = '';
    }, 750);
    return;
  }

  chrome.storage.sync.set({
    userSetting: setting
  }, function(){
    status.textContent = 'saved.';
    setTimeout(function(){
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    userSetting: '{}'
  }, function(items){
    document.getElementById('setting').value = items.userSetting;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
