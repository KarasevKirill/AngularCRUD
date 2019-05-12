using Microsoft.EntityFrameworkCore;

namespace AngularCRUD.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options): base(options)
        {

        }
    }
}
