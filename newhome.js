window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
//Template literal es6 feature
const createInnerHtml =() =>{
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department"+
                      "</th><th>Salary</th><th>StartDate</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" 
                src="../assets/profile-images/Ellipse -2.png" alt="">
            </td>
            <td>Murgendra Ghulanawar</td>
            <td>Male</td>
            <td><div class='dept-label'>Engineering</div>
                <div class='dept-label'>Finance</div>
            </td>
            <td>100000</td>
            <td>23 April 2022</td>
            <td>
                <img id="1" onclick="remove(this)" 
                src="../assets/icons/delete-black-18dp.svg" alt="delete" >
                <img id="1"  onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td> 
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}