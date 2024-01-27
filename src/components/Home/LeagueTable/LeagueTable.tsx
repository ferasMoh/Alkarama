import "./LeagueTable.scss";

const LeagueTable = () => {
  return (
    <div className="league-table">
      <div className="league-table-header flexCenter">
        <p>جدول الدوري السوري</p>
        <img src="./images/Home/Table.png" alt="" />
      </div>
      <table>
        <thead>
          <tr>
            <th>الفريق</th>
            <th>لعب</th>
            <th>خسارة</th>
            <th>تعادل</th>
            <th>فاز</th>
            <th>المتبقية</th>
            <th>+/-</th>
            <th>فرق</th>
            <th>المتبقية</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;