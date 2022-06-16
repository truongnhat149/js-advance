this.firstName = 'No';
this.lastName = 'Hoa';

const teacher = {
    firstName: 'Nguyen',
    lastName : 'Hoa',
    getFullName() {
       return `${this.firstName} ${this.lastName}`;
    }
}

// case 1:

console.log(teacher.getFullName()); // called function

// case 2:
const getTeacherName = teacher.getFullName // reference address memory
console.log(getTeacherName());


const student = {
    firstName: 'truong',
    lastName: 'nhat',
}

const getStudentName = student.getFullName.bind(student);

console.log(getStudentName('Test 1', 'Test 2'));