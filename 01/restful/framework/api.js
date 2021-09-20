module.exports = {
    async init(ctx, next) {
        //初始化 
        // 根据 list
        const model = ctx.app.$model[ctx.params.list]
        console.log(model,ctx.app)
        if (model) {
            ctx.list = model
            await next()
        } else {
            ctx.body = '模型不存在'
        }
    },
    async list(ctx) {
        ctx.body = await ctx.list.find({})
    },
    async get(ctx) {
        ctx.body = await ctx.list.findOne({
            _id: ctx.params.id
        })
    },
    async create(ctx) {
        const res = await ctx.list.create(ctx.request.body);
        ctx.body = res;
    },
    async update(ctx) {
        const res = await ctx.list.updateOne({
            _id: ctx.params.id
        }, ctx.request.body);
        ctx.body = res;
    },
    async del(ctx) {
        const res = await ctx.list.deleteOne({
            _id: ctx.params.id
        });
        ctx.body = res;
    },

}