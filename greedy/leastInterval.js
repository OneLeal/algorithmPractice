// LeetCode：621. 任务调度器
var leastInterval = function(tasks, n) {
    var taskMap = {}, result = '';
    tasks.forEach(task => {
       if (taskMap[task]) {
           taskMap[task]++;
       } else {
           taskMap[task] = 1;
       }
    });

    var temp = [];                         // 临时任务队列
    while (1) {
        var queue = Object.keys(taskMap);  // 任务种类集合
        var mission = '';                  // 数量最多的任务
        if (!queue.length) break;

        // 每次循环做三件事：不同种类任务的排布，任务种类的删除，减少某种任务的数量
        for (var i = 0; i < n + 1; i++) {
            var maxNum = 0;
            queue.forEach(item => taskMap[item] > maxNum && (mission = item, maxNum = taskMap[item]));

            var index = queue.indexOf(mission);
            if (index > -1) {
                temp.push(mission);
                queue.splice(index, 1);
                taskMap[mission] > 1 ? taskMap[mission]-- : delete taskMap[mission];
            } else break;
        }

        result += temp.join('').padEnd(n + 1, '-'); // 补齐冷却时间
        temp = [];
    }

    result = result.replace(/-+$/, '');         // 以空串替换多 '-' 为结尾的子串
    return result.length;
};

var tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2;
console.log(leastInterval(tasks, n));