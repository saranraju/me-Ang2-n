module.exports = {

	images:{
		files: [{
			expand:true,
			cwd: 'src/images/',
			src:['**/*.jpg','**/*.png'],
			dest: 'public/images'
		}]
	},
	fonts:{
		files: [{
			expand:true,
			cwd: 'src/fonts/',
			src:['*.eot','*.svg','*.ttf','*.woff','*.woff2','*.otf'],
			dest: 'public/fonts'
		}]
	}
};