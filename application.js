import Controller from '@ember/controller';
import { computed } from '@ember/object';
import $ from 'jquery';
export default Controller.extend({
	fpath: '',
	fname: '',
	sword:'',
    fullPath: computed('fpath', 'fname', function(){
	return `${this.get('fpath')}${this.get('fname')}`;
	}),
	actions:{
		doSomething(){
			var obj= {};
			$.post().then(function(response){});
		}
	}		
});
