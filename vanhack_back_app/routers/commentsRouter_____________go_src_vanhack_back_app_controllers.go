package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"] = append(beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"],
        beego.ControllerComments{
            Method: "Post",
            Router: `/`,
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"] = append(beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: `/`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"] = append(beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: `/:id`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"] = append(beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"],
        beego.ControllerComments{
            Method: "Put",
            Router: `/:id`,
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"] = append(beego.GlobalControllerRouter["vanhack_back_app/controllers:FavoriteController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: `/:id`,
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
