namespace Utils;

class Numeric
{
    public static function convert(var data,array list = null){
        var json,column,x_max,y_max,x,y,key,val,ar;
        if is_object(data) {	// オブジェクトは配列に変換
            let json = json_encode(data);
            let data = json_decode(json,true);
        }
        if !is_array(data) {	// 配列でなければそのまま返す
            return data;
        }
        let ar = false;
        for val in data {
            if is_array(val) {
                let ar = true;
            }
            break;
        }
        if list == null {
            if ar {		// 二次元配列
                let y_max = sizeof(data) - 1;
                for y in range(0,y_max) {
                    for key,val in data[y] {
                        if is_numeric(val) {
                            let data[y][key] = (double)val;
                        }
                    }
                }
            }else{
                for key,val in data {
                    if is_numeric(val) {
                        let data[key] = (double)val;
                    }
                }
            }
            return data;
        }
        if ar {		// 二次元配列
            let column = [];
            for key,_ in data[0] {
                let column[] = key;
            }
            let y_max = sizeof(data) - 1;
            let x_max = sizeof(data[0]) - 1;
            for x in range(0,x_max) {
                if in_array(column[x],list) {
                    continue;
                }
                for y in range(0,y_max) {
                    if is_numeric(data[y][column[x]]) {
                        let data[y][column[x]] = (double)data[y][column[x]];
                    }
                }
            }
        }else{
            for key,val in data {
                if in_array(key,list) {
                    continue;
                }
                if is_numeric(data[key]) {
                    let data[key] = (double)val;
                }
            }
        }
        return data;
    }

}
