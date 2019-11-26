import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.Map;
import java.util.Vector;
import java.util.logging.Logger;


public class Points {
    private final Connection connection;
    /*private String url = "jdbc:postgresql://localhost:5432/pip";
    private String login = "postgres";
    private String pass = "genm00";*/
   private String url = "jdbc:postgresql://pg:5432/studs";
    private String login = "s265067";
    private String pass = "rdi044";

    private static final String TABLE_NAME = "results";
    private final Logger logger;

    {
        connection = new Database(url, login, pass, true).getConnection();
        logger = Logger.getLogger("logger");
    }

    public int addResult() {
        Map<String, String> requestParameterMap = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap();
        String xstr = requestParameterMap.get("form:x_input");
        String ystr = requestParameterMap.get("form:y");
        String rstr = requestParameterMap.get("form:rt");
        Object res[]=null;
        logger.info("X = " + xstr);
        logger.info("Y = " + ystr);
        logger.info("R = " + rstr);
        double x;
        double y;
        double r;
        try {
            x = Double.parseDouble(xstr.replace(',', '.'));
            y = Double.parseDouble(ystr.replace(',', '.'));
            r = Double.parseDouble(rstr.replace(',', '.'));
        } catch (Exception e) {
            logger.info("-1");
            return -1;
        }

        boolean hit = MainBean.check(x, y, r);

        logger.info("try");
        try {
            String sql = "INSERT INTO results (x, y, r , hit) VALUES (?, ?, ?, ?);";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setDouble(1, x);
            preparedStatement.setDouble(2, y);
            preparedStatement.setDouble(3, r);
            preparedStatement.setBoolean(4, hit);

            int rows = preparedStatement.executeUpdate();
            return rows;
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("added");
        return -1;
    }

    public Vector<MainBean> getAllResults() {
        Vector<MainBean> mainBeans = new Vector<MainBean>();
        try {
            ResultSet resultSet = connection.createStatement().executeQuery("SELECT * FROM " + TABLE_NAME + ";");
            while (resultSet.next()) {
                MainBean mainBean = new MainBean();
                Double x = Double.parseDouble(resultSet.getString("x"));
                Double y = Double.parseDouble(resultSet.getString("y"));



                mainBean.setX(x);
                mainBean.setY(y);
                mainBean.setR(resultSet.getDouble("r"));
                mainBean.setHit(resultSet.getString("hit").contains("t"));
                mainBeans.add(mainBean);
            }
            resultSet.close();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return mainBeans;
    }



}
