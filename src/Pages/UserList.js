import React, { useContext } from "react";
import ReduxContext from "../Store/ReduxContext";
import { Link } from "../HashRouter"
export default props => {
    const { state } = useContext(ReduxContext);
    const { userList } = state;
    const list = Array.isArray(userList)? userList: [];
    
    return (
        <div class="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">id</th>
                        <th className="text-center">username</th>
                        <th className="text-center">nickname</th>
                        <th className="text-center">password</th>
                        <th className="text-center">details</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr>
                            {Object.keys(item).map(key => (
                                <td className="text-center">{item[key]}</td>
                            ))}
                            <td className="text-center">
                                <Link style={{ cursor: "pointer" }} to={`/user/details/${item.id}`}>
                                    详情
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {list.length <= 0 && <div className="text-center">暂无数据 ……</div>}
        </div>
    );
};