import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.component.UIInput;
import javax.faces.context.FacesContext;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class MainBean {
    private double y;
    private double x;
    private double r;
    private boolean hit;

private String errorMessage="";
    public String getErrorMessage() {
        return errorMessage;
    }
    public void setR(double r) {
        this.r = r;
    }

    public double getR() {
        return r;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getX() {
        return x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getY() {
        return y;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public String getHit() {
        if (hit == true) return "Попал!";
        else return "Не попал:(";
    }



    public static boolean check(double x, double y, double r) {
        System.out.println((-x) / 2);
        if ((x <= 0 && y >= 0 && x * x + y * y <= r * r / 4) ||
                (x >= 0 && y <= 0 && x <= r / 2 && y >= -r) ||
                (x <= 0 && y <= 0 && y >= ((-x) / 2 - r / 2)))
            return true;
        else
            return false;
    }


    public boolean validateR() {
        System.out.println(r);
    if(r==0.0){
    return false;}
    else { return true;}
    }
}

