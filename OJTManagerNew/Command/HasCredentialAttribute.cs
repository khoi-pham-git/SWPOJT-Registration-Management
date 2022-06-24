using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OJTManagerNew.Command
{
    public class HasCredentialAttribute : AuthorizeAttribute
    {
        public string RoleId { get; set; }
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            var session = (OJTManagerNew.Models.Account)HttpContext.Current.Session[Commoncontent.user_sesion_admin];
            if (session == null)
            {
                return false;
            }

            List<string> privilegeLevels = this.GetCredentialByLoggedInUser(session.AccountID); // Call another method to get rights of the user from DB

            if (privilegeLevels.Contains(this.RoleId) || session.RoleID ==0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new ViewResult
            {
                ViewName = "~/Views/Shared/401.cshtml"
            };
        }
        private List<string> GetCredentialByLoggedInUser(int id)
        {
            var credentials = (List<string>)HttpContext.Current.Session[Commoncontent.SESSION_CREDENTIALS];
            return credentials;
        }
    }
}