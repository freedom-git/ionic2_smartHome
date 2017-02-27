import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'splitMusicName'})
export class SplitMusicNamePipe implements PipeTransform {
  transform(input?: string): {author:string,name:string} {
      if(!input){return {author:'',name:''}}
           // console.log(input);
            var beforeMoveMp3 = input.split(".");
            var afterMoveMp3='';
            for(var i=0;i<beforeMoveMp3.length-1;i++){
                afterMoveMp3+=beforeMoveMp3[i];
            }
           // console.log(afterMoveMp3);
            var beforeSplitauthorAndName=afterMoveMp3.split("_-_");
            //console.log(beforeSplitauthorAndName);
            var authorBeforemove_=beforeSplitauthorAndName[0];
            var nameBeforeMove_=beforeSplitauthorAndName[1];
            var author=authorBeforemove_.split("_").join(' ');
            var name=nameBeforeMove_.split("_").join(' ');
            return {author:author,name:name};
  }
}