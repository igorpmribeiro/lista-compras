const addBtn = document.getElementById('add-btn');
const input = document.querySelector('input');
const list = document.querySelector('.list ul');
const successMsg = document.querySelector('.success');
const alertMsg = document.querySelector('.alert');


addBtn.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.textContent = input.value;
  
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', function() {
    newItem.remove();
    alertMsg.style.display = 'block';

    setTimeout(function() {
      alertMsg.style.display = 'none';
    }, 3000);
  });
  
  newItem.appendChild(removeBtn);

  if (input.value === '') {
    alert('Digite alguma item para adicionar');
  } else {
  list.appendChild(newItem);
  }

  if (newItem.textContent) {
    successMsg.style.display = 'block';
    setTimeout(function() {
      successMsg.style.display = 'none';
    }, 3000);
    return;
  }
  
  
  input.value = '';
});

