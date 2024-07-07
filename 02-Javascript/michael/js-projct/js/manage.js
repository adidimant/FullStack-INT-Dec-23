
       const userDataString = localStorage.getItem('userData');
       const lastUpdatedDate = localStorage.getItem('lastUpdatedDate');

       function resetTable() {
           document.getElementById('resID').innerHTML = '';
           localStorage.removeItem('userData');
           renderTable();
           location.reload()
       }

       function renderTable() {
           const tableBody = document.querySelector('#userTable tbody');

          
           if (userDataString) {
               const userData = JSON.parse(userDataString);
               
               userData.forEach(user => {
                   const row = document.createElement('tr');

                   for (const key in user) {
                       if (user.hasOwnProperty(key)) {
                           const cell = document.createElement('td');
                           cell.textContent = user[key];
                           cell.setAttribute('data-key', key.toLowerCase()); 
                           row.appendChild(cell);

                           if (key !== 'Register Date') {
                               const pencilButton = document.createElement('button');
                               pencilButton.textContent = '✏️';
                               pencilButton.classList.add('pencil-button'); 
                               pencilButton.onclick = function() {
                                   const newEdit = prompt(`Enter new ${key}:`);
                                   if (newEdit !== null) {
                                       cell.textContent = newEdit;
                                       user[key] = newEdit;
                                       localStorage.setItem('userData', JSON.stringify(userData));
                                       location.reload()
                                       updateLastUpdated();
                                       location.reload();
                                }
                               };
                               cell.appendChild(pencilButton);
                           }
                       }
                   }

                   tableBody.appendChild(row);
               });
           }
       }

       renderTable();

       function filterTable() {
           const filterKey = document.getElementById('filterKey').value.toLowerCase();
           const searchInput = document.getElementById('searchInput').value.toLowerCase();
           const rows = document.querySelectorAll('#resID tr');

           rows.forEach(row => {
               const cells = row.getElementsByTagName('td');
               let found = false;

               for (let i = 0; i < cells.length; i++) {
                   const cellText = cells[i].textContent.toLowerCase();
                   if (cells[i].getAttribute('data-key') === filterKey && cellText.includes(searchInput)) {
                       found = true;
                       break;
                   }
               }

               if (found) {
                   row.style.display = ''; 
               } else {
                   row.style.display = 'none'; 
               }
           });
       }

       function resetFilter() {
           document.getElementById('filterForm').reset();
           const rows = document.querySelectorAll('#resID tr');
           rows.forEach(row => {
               row.style.display = ''; 
           });
       }

       function updateLastUpdated() {
           const currentDate = new Date().toLocaleString();
           document.getElementById('lastUpdatedText').textContent = `Last Updated: ${currentDate}`;
           localStorage.setItem('lastUpdatedDate', currentDate);
       }

       
       if (lastUpdatedDate) {
           document.getElementById('lastUpdatedText').textContent = `Last Updated: ${lastUpdatedDate}`;
       }