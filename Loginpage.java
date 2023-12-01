import java.util.*;

public class Loginpage {
    public static void main(String args[]) {
        // Declaring the username and password
        String user_name = "Hemanth";
        String password = "Hemanth";

        if (user_name.equals("Hemanth") && password.equals("Hemanth")) {
            System.out.println("Authentication Successful");
        } else {
            System.out.println("User name/ Password not matching");
        }
    }
}