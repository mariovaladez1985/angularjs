function FileUpload()
{
    return {
        scope: {},
        template:  `
            <div class="upload">
                <div class="upload-zone">
                    <p>Drop Your Files Here!</p>
                    <a href="" ng-click="upload.uploadFiles();">
                        Upload
                    </a>
                </div>
                <ul>
                    <li ng-repeat="file in upload.files">
                        {{file.name}}
                    </li>
                </ul>
            </div>
        `,
        controller: function () {
            this.files = [];
            this.registerFiles = function (files) {
                Array.prototype.push.apply(this.files, files);
            };
            this.uploadFiles = function () {
                if(!this.files.length)
                {
                    return;
                }
                //pass to parent directive or service for uploading
                console.log(this.files);
            }
        },
        controllerAs: 'upload',
        link: function ($scope, $element, $attrs, $control){

            var upload = $element[0].querySelector('.upload-zone');

            function onDrop(e){
                if(e.dataTransfer && e.dataTransfer.files){
                    $control.registerFiles(e.dataTransfer.files);
                    //Notify that changes were made, and it is needed to refresh
                    $scope.$apply();
                }
            }

            //Prevent defaults
            function preventDefault(e){
                    e.preventDefault();
            }

            upload.addEventListener('dragenter', preventDefault, false);
            upload.addEventListener('dragleave', preventDefault, false);
            upload.addEventListener('dragover', preventDefault, false);
            upload.addEventListener('drop', preventDefault, false);
            upload.addEventListener('drop', onDrop, false);
        }
    }
}

angular
    .module('app')
    .directive('fileUpload', FileUpload);