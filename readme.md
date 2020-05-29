887. 鸡蛋掉落
链接：https://leetcode-cn.com/problems/super-egg-drop

你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。

每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。

你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。

每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。

你的目标是确切地知道 F 的值是多少。

无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？
题解：
链接：https://leetcode-cn.com/problems/super-egg-drop/solution/js-dong-tai-gui-hua-by-ziogie/
？？？没明白

根据https://github.com/Shellbye/Shellbye.github.io/issues/42换角度思考得到

dp[k][m] 的含义是k个鸡蛋 移动m次最多能够确定多少楼层
这个角度思考
dp[k][m] 最多能够确定的楼层数为L
那么我选定第一个扔的楼层之后，我要么碎，要么不碎
这就是把L分成3段
左边是碎的那段 长度是dp[k][m - 1]
右边是没碎的那段 长度是dp[k-1][m - 1] 因为已经碎了一个了
中间是我选定扔的楼层 是1
所以递推公式是
dp[k][m] = dp[k - 1][m - 1] + dp[k][m - 1] + 1
根据递推公式 如果采用k倒着从大到小计算 就可以只存一行的dp[k] 直接原地更新dp[k] 不影响后续计算 只需要O(K)空间复杂度 O(KlogN) 鸡蛋完全够用的时候 就是走LogN步 最差情况是1个鸡蛋走N步 O(KN)