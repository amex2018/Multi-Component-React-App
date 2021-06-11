const mongoose =  require('mongoose');

const ConnectDB =  async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log(`Mongodb connections: ${conn.connection.host}`)
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
	
}

module.exports = ConnectDB