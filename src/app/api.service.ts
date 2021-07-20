import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static HOST_URL: string = "http://localhost:8090";

  constructor(
    private http: HttpClient,
  ) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public static saveStdListURL: string = ApiService.HOST_URL + '/admin/SaveStdList';
  public static getStdListURL: string = ApiService.HOST_URL + '/admin/GetStdList';
  public static saveSubjectURL: string = ApiService.HOST_URL + '/admin/saveSubject';
  public static getSubjectListURL: string = ApiService.HOST_URL + '/admin/GetSubjectList';
  public static updateSubjectURL: string = ApiService.HOST_URL + '/admin/UpdateSujectList/';
  public static removeSubjectURL: string = ApiService.HOST_URL + '/admin/RemoveSubjectList/';
  public static removeStdURL: string = ApiService.HOST_URL + '/admin/RemoveStandardList/';
  



  public static getMainURL: string = ApiService.HOST_URL + '/admin/GetMainCategory/';
  public static saveCatURL: string = ApiService.HOST_URL + '/admin/SaveMainCategory';
  public static updateMainCatURL: string = ApiService.HOST_URL + '/admin/UpdateMainCategory/';
  public static removeMainCatURL: string = ApiService.HOST_URL + '/admin/RemoveMainCategory/';
  public static updateCategoryURL: string = ApiService.HOST_URL + '/admin/UpdateCategory';
  public static saveProductsURL: string = ApiService.HOST_URL + '/admin/SaveAddProducts/';
  public static uploadMainImageURL: string = ApiService.HOST_URL + '/admin/UploadProductImage/';
  public static uploadMultiImageURL: string = ApiService.HOST_URL + '/admin/UploadMultiProductImage/';
  public static removeImageURL: string = ApiService.HOST_URL + '/admin/RemoveRecentUoloadImage/';
  public static getClothsURL: string = ApiService.HOST_URL + '/admin/GetClothsSize/';
  public static getReviewsListURL: string = ApiService.HOST_URL + '/admin/GetReviewList/';
  public static getCustomerListURL: string = ApiService.HOST_URL + '/admin/GetCustomerList/';
  public static loginAdminURL: string = ApiService.HOST_URL + '/admin/GetLoginAdmin/';
  public static saveAdminRegisterURL: string = ApiService.HOST_URL + '/admin/SaveAdminRegister';
  public static saveBankListURL: string = ApiService.HOST_URL + '/admin/SaveBankListCategory';
  
  public static removeProductListItemURL: string = ApiService.HOST_URL + '/admin/RemoveProduct/';
  public static GetFilterProductsURL: string = ApiService.HOST_URL + '/admin/GetAllFilterProduct/';
  public static saveAdminLoginURL: string = ApiService.HOST_URL + '/admin/login';
  public static uploadBannersImageURL: string = ApiService.HOST_URL + '/admin/UploadBannersImage';
  public static saveWebBannersURL: string = ApiService.HOST_URL + '/admin/SaveWebBanners';
  public static getWebBannersURL: string = ApiService.HOST_URL + '/admin/GetWebBanners/';
  public static removeWebBannersURL: string = ApiService.HOST_URL + '/admin/RemoveWebBanners';
  public static updateActiveWebStatusURL: string = ApiService.HOST_URL + '/admin/UpdateActiveWebBanners';
  
  public static getMobileBannersURL: string = ApiService.HOST_URL + '/admin/GetMobileBanners/';
  public static saveMobileBannersURL: string = ApiService.HOST_URL + '/admin/SaveMobileBanners';
  public static uploadMobileImageURL: string = ApiService.HOST_URL + '/admin/UploadMobileBannersImage';
  public static removeMobileBannersURL: string = ApiService.HOST_URL + '/admin/RemoveMobileBanners';
  public static updateActiveStatusURL: string = ApiService.HOST_URL + '/admin/UpdateActiveMobileBanners';
  
  public static removeROIListURL: string = ApiService.HOST_URL + '/admin/RemoveROIList';
  public static getOrdersListURL: string = ApiService.HOST_URL + '/admin/GetOrdersList';
  public static acceptUserOrderURL: string = ApiService.HOST_URL + '/admin/AcceptUserOrders';
  public static addToNewArrivalsURL: string = ApiService.HOST_URL + '/admin/addToNewArrivals';
  public static addToBestProductURL: string = ApiService.HOST_URL + '/admin/addToBestProduct';
  public static addToHotProductURL: string = ApiService.HOST_URL + '/admin/addToHotProduct';
  public static addToOnSaleURL: string = ApiService.HOST_URL + '/admin/addToOnSale';
  public static GetSizeListURL: string = ApiService.HOST_URL + '/admin/GetProductSizeList'
  public static getAdminProductListURL: string = ApiService.HOST_URL + '/admin/GetProductList';
  public static getFilterProductListURL: string = ApiService.HOST_URL + '/admin/getFilterProductList';
  public static uploadCategoryBannersURL: string = ApiService.HOST_URL + '/admin/UploadCategoryBannersImage';
  public static getProductDetailImageURL: string = ApiService.HOST_URL + '/admin/getProductDetailImage';
  public static updateOrdersStatusURL: string = ApiService.HOST_URL + '/admin/UpdateOrdersStatus';

  showNotification(from, align, msg, color) {
     

    var color = color;

    $.notify({
      icon: "",
      message: msg
    }, {
      type: color,
      timer: 2000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    });
  }
}
