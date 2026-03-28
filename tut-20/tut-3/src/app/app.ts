import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-3';

  users = [
    { firstName: "Saurabh", lastName: "Barasiya", email: "saurabh.barasiya1@example.com", address: "Indore, MP, India" },
    { firstName: "Rahul", lastName: "Sharma", email: "rahul.sharma2@example.com", address: "Bhopal, MP, India" },
    { firstName: "Priya", lastName: "Verma", email: "priya.verma3@example.com", address: "Delhi, India" },
    { firstName: "Amit", lastName: "Singh", email: "amit.singh4@example.com", address: "Mumbai, MH, India" },
    { firstName: "Neha", lastName: "Gupta", email: "neha.gupta5@example.com", address: "Pune, MH, India" },
    { firstName: "Rohit", lastName: "Yadav", email: "rohit.yadav6@example.com", address: "Lucknow, UP, India" },
    { firstName: "Anjali", lastName: "Mehta", email: "anjali.mehta7@example.com", address: "Ahmedabad, GJ, India" },
    { firstName: "Vikas", lastName: "Patel", email: "vikas.patel8@example.com", address: "Surat, GJ, India" },
    { firstName: "Kavita", lastName: "Joshi", email: "kavita.joshi9@example.com", address: "Jaipur, RJ, India" },
    { firstName: "Manish", lastName: "Agarwal", email: "manish.agarwal10@example.com", address: "Kolkata, WB, India" },
    { firstName: "Pooja", lastName: "Chauhan", email: "pooja.chauhan11@example.com", address: "Chandigarh, India" },
    { firstName: "Deepak", lastName: "Mishra", email: "deepak.mishra12@example.com", address: "Varanasi, UP, India" },
    { firstName: "Sneha", lastName: "Reddy", email: "sneha.reddy13@example.com", address: "Hyderabad, TS, India" },
    { firstName: "Arjun", lastName: "Nair", email: "arjun.nair14@example.com", address: "Kochi, KL, India" },
    { firstName: "Divya", lastName: "Iyer", email: "divya.iyer15@example.com", address: "Chennai, TN, India" },
    { firstName: "Karan", lastName: "Malhotra", email: "karan.malhotra16@example.com", address: "Delhi, India" },
    { firstName: "Meena", lastName: "Kumari", email: "meena.kumari17@example.com", address: "Patna, BR, India" },
    { firstName: "Sanjay", lastName: "Dubey", email: "sanjay.dubey18@example.com", address: "Gwalior, MP, India" },
    { firstName: "Ritika", lastName: "Kapoor", email: "ritika.kapoor19@example.com", address: "Noida, UP, India" },
    { firstName: "Nitin", lastName: "Jain", email: "nitin.jain20@example.com", address: "Udaipur, RJ, India" }
  ];

  filteredData = [...this.users];

  searchString:string = '';

  liveSearch(){
    let searchData = this.searchString.toLowerCase();
    this.filteredData = this.users.filter(
      u=>u.firstName.toLowerCase().includes(searchData) ||
      u.lastName.toLowerCase().includes(searchData) ||
      u.email.toLowerCase().includes(searchData) || 
      u.address.toLowerCase().includes(searchData)
    )
  }
}
