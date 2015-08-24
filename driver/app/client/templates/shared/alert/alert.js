/**
 * Created by phucnguyen on 8/24/15.
 */
Template.Alert.unity={
  trimHelper:function(val){
    return val.replace(/^\s*|\s*$/g, "");
  },
  displayErrorAlert:function(message,element){
    var err =$(element.find('.alert-danger'));
    var su=$(element.find('.alert-success'));
    err.removeClass('hide');
    su.addClass('hide')
    err.find('strong').html('Error');
    err.find('span').html(message);
  },
  displaySuccessAlert:function(message,element){
    var su =$(element.find('.alert-success'));
    var err =$(element.find('.alert-danger'));
    su.removeClass('hide');
    err.addClass('hide');
    su.find('strong').html('Success');
    su.find('span').html(message);
  }
}