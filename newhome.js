window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
//Template literal es6 feature
const createInnerHtml =() =>{
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department"+
                      "</th><th>Salary</th><th>StartDate</th><th>Actions</th>";

    let empPayRollData = createEmployeePayRollJSON()[0];             
    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile"
                src="${empPayRollData._profilePic}" alt=""></td>
                <td>${empPayRollData._name}</td>
                <td>${empPayRollData._gender}</td>
                <td>
                    <div class='dept-label'>${empPayRollData._department[0]}</div>
                    <div class='dept-label'>${empPayRollData._department[1]}</div>
                </td>
                <td>${empPayRollData._salary}</td>
                <td>${empPayRollData._startDate}</td>
                <td>
                    <img name="${empPayRollData._id}" onclick="remove(this)" 
                    src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${empPayRollData._id}" onclick="update(this)"
                    src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td> 
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
    const createEmployeePayRollJSON=()=>{
        let employeePayRollListLocal=[
            {
                _name:'Murgendra',
                _gender:'male',
                _department:['Engineering','Finance'],
                _salary:'50000',
                _startDate:'29 Oct 2019',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'Ellipse3.jpg'
            },
            {
                _name:'Suresh',
                _gender:'male',
                _department:['Engineering','Finance'],
                _salary:'30000',
                _startDate:'21 Oct 2019',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'Ellipse3.jpg'
            }
    
        ];
        return employeePayRollListLocal;
    }