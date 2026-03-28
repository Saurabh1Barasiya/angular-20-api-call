import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersData } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  getAllUsers(): Observable<UsersData[]> {
    return of(
      [
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
        { firstName: "Nitin", lastName: "Jain", email: "nitin.jain20@example.com", address: "Udaipur, RJ, India" },

        { firstName: "Akash", lastName: "Soni", email: "akash.soni21@example.com", address: "Nagpur, MH, India" },
        { firstName: "Payal", lastName: "Bansal", email: "payal.bansal22@example.com", address: "Amritsar, PB, India" },
        { firstName: "Tarun", lastName: "Goyal", email: "tarun.goyal23@example.com", address: "Hisar, HR, India" },
        { firstName: "Shreya", lastName: "Das", email: "shreya.das24@example.com", address: "Bhubaneswar, OD, India" },
        { firstName: "Abhishek", lastName: "Tiwari", email: "abhishek.tiwari25@example.com", address: "Kanpur, UP, India" },
        { firstName: "Komal", lastName: "Arora", email: "komal.arora26@example.com", address: "Ludhiana, PB, India" },
        { firstName: "Gaurav", lastName: "Saxena", email: "gaurav.saxena27@example.com", address: "Bareilly, UP, India" },
        { firstName: "Nisha", lastName: "Thakur", email: "nisha.thakur28@example.com", address: "Shimla, HP, India" },
        { firstName: "Harsh", lastName: "Chopra", email: "harsh.chopra29@example.com", address: "Delhi, India" },
        { firstName: "Tanya", lastName: "Bhatia", email: "tanya.bhatia30@example.com", address: "Gurgaon, HR, India" },

        { firstName: "Ramesh", lastName: "Pillai", email: "ramesh.pillai31@example.com", address: "Trivandrum, KL, India" },
        { firstName: "Seema", lastName: "Kulkarni", email: "seema.kulkarni32@example.com", address: "Nashik, MH, India" },
        { firstName: "Mohit", lastName: "Choudhary", email: "mohit.choudhary33@example.com", address: "Ajmer, RJ, India" },
        { firstName: "Sonal", lastName: "Desai", email: "sonal.desai34@example.com", address: "Vadodara, GJ, India" },
        { firstName: "Yash", lastName: "Shah", email: "yash.shah35@example.com", address: "Rajkot, GJ, India" },
        { firstName: "Preeti", lastName: "Seth", email: "preeti.seth36@example.com", address: "Delhi, India" },
        { firstName: "Alok", lastName: "Pandey", email: "alok.pandey37@example.com", address: "Allahabad, UP, India" },
        { firstName: "Swati", lastName: "Kohli", email: "swati.kohli38@example.com", address: "Delhi, India" },
        { firstName: "Varun", lastName: "Kapoor", email: "varun.kapoor39@example.com", address: "Noida, UP, India" },
        { firstName: "Isha", lastName: "Madan", email: "isha.madan40@example.com", address: "Faridabad, HR, India" },

        { firstName: "Raj", lastName: "Chatterjee", email: "raj.chatterjee41@example.com", address: "Kolkata, WB, India" },
        { firstName: "Mona", lastName: "Paul", email: "mona.paul42@example.com", address: "Kolkata, WB, India" },
        { firstName: "Kishore", lastName: "Naidu", email: "kishore.naidu43@example.com", address: "Visakhapatnam, AP, India" },
        { firstName: "Lakshmi", lastName: "Rao", email: "lakshmi.rao44@example.com", address: "Bangalore, KA, India" },
        { firstName: "Ravi", lastName: "Shetty", email: "ravi.shetty45@example.com", address: "Mangalore, KA, India" },
        { firstName: "Pankaj", lastName: "Bhardwaj", email: "pankaj.bhardwaj46@example.com", address: "Delhi, India" },
        { firstName: "Asha", lastName: "Nair", email: "asha.nair47@example.com", address: "Kochi, KL, India" },
        { firstName: "Vinod", lastName: "Menon", email: "vinod.menon48@example.com", address: "Kochi, KL, India" },
        { firstName: "Rekha", lastName: "Patil", email: "rekha.patil49@example.com", address: "Kolhapur, MH, India" },
        { firstName: "Sunil", lastName: "Kadam", email: "sunil.kadam50@example.com", address: "Satara, MH, India" },
      ]
    )
  }
}
